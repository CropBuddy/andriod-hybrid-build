require 'rho/rhocontroller'
require 'helpers/browser_helper'

class PestDiseaseController < Rho::RhoController
  include BrowserHelper

  # GET /PestDisease
  def index
    @pest_diseases = PestDisease.find(:all)
    render :back => '/app'
  end

  # GET /PestDisease/{1}
  def show
    @pest_disease = PestDisease.find(@params['id'])
    if @pest_disease
      render :action => :show, :back => url_for(:action => :index)
    else
      redirect :action => :index
    end
  end

  # GET /PestDisease/new
  def new
    @pest_disease = PestDisease.new
    render :action => :new, :back => url_for(:action => :index)
  end

  # GET /PestDisease/{1}/edit
  def edit
    @pest_disease = PestDisease.find(@params['id'])
    if @pest_disease
      render :action => :edit, :back => url_for(:action => :index)
    else
      redirect :action => :index
    end
  end

  # POST /PestDisease/create
  def create
    @pest_disease = PestDisease.create(@params['pest_disease'])
    redirect :action => :index
  end

  # POST /PestDisease/{1}/update
  def update
    @pest_disease = PestDisease.find(@params['id'])
    @pest_disease.update_attributes(@params['pest_disease']) if @pest_disease
    redirect :action => :index
  end

  # POST /PestDisease/{1}/delete
  def delete
    @pest_disease = PestDisease.find(@params['id'])
    @pest_disease.destroy if @pest_disease
    redirect :action => :index  
  end
end
